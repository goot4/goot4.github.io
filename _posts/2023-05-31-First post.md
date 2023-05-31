---
title: Make a editor tool window to present specified data using UI Toolkit
date: 2023-05-31 13:26:00 +0800
categories: [Unity, UI]
tags: [uiToolkit, tool, tutorial]     # TAG names should always be lowercase
img_path: /assets/image/
---

## Abstract

This is a demo to show you how to build a tool to present specified data using Unity UI Toolkit, which is quite a common and flexible.

This tutorial is suitable for these who just starts using UI toolkit (like me when I did this project). This is a how-to example which can get you more familiar with UI Toolkit.

## Showcase

Here is how the tool looks like:

![DataPresentationTool](DataPresentationTool.png){: width="400" height="400" }

This tool has functions listed below:
1. Show/Hide certain column
2. Filter according to Kind Field
3. Mark certain row as read (write to file)
4. Sort by certain column
5. Select and Multi-select rows
6. Multi-operation: After selection, apply command to the selected rows
7. Context menu for every field

## How-to explanation
This tool's main part is a `MultiColumnListView` UI element. First, I prepared the data, then I bind the data with the `MultiColumnListView`, finally, I add some controllers to manipulate the data in presentation.

### Save and Load Data
The data entry to show is this:
```cs
struct DataEntry {
  public int id;
  public enum Kind { Normal, Important, Trash }
  public Kind kind;
  public string title;
  public System.DateTime time;
  public bool read;
}

[Serializable]
public class DataEntryWrapper
{
    public List<DataEntry> DataEntries;
}
```

​Using `JsonUtility` to read and write file. 
```cs
public List<DataEntry> LoadData()
{
    var fullPath = Path.Combine(dataFileDirPath, dataFileName);
    string jsonData;
    if (!File.Exists(fullPath)) return null;
    using (FileStream stream = new FileStream(fullPath, FileMode.Open))
    {
        using (StreamReader reader = new StreamReader(stream))
        {
            jsonData = reader.ReadToEnd();
        }
    }

    var dataList = JsonUtility.FromJson<DataEntryWrapper>(jsonData).DataEntries;
    
    // Other processions applied to dataList
    // ...

    return dataList;
}

public void SaveData(DataEntryWrapper dataWrapper)
{
    var fullPath = Path.Combine(dataFileDirPath, dataFileName);
    Directory.CreateDirectory(Path.GetDirectoryName(fullPath));
    
    // serialize the data to Json
    var jsonData = JsonUtility.ToJson(dataWrapper, true);
    // using these objects in a using statement so that the unmanaged resources are correctly disposed.
    using (FileStream stream = new FileStream(fullPath, FileMode.Create))
    {
        using (StreamWriter writer = new StreamWriter(stream))
        {
            writer.Write(jsonData);
        }
    }
}
```

### Add Editor window
Add a new script in Project/Editor file
```cs
​public class DataEditor : EditorWindow
{
    [MenuItem("Window/DataEditor")]
    public static void ShowExample()
    {
        DataEditor wnd = GetWindow<DataEditor>();
        wnd.titleContent = new GUIContent("DataEditor");
    }
    
    public void CreateGUI()
    {
        // Create UI here
    }
}
```
### How to use MultiColumnListView
By set 3 properties of `MultiColumnListView`
1. set property `itemsSource` to dataEntryList which is going to be displayed.
2. set `makeCell` callback, return a UI element to displayed.
3. set `bindCell` callback, this instructs how data is combined with UI element.

### Mark as read Function

Using UI element `Toggle` to represent read filed.

```cs
listView.columns["READ"].bindCell = (VisualElement element, int index) =>
{
    (element as Toggle).value = displayedList[index].read;
    (element as Toggle).RegisterCallback<ChangeEvent<bool>>(evt =>
    {
        // when the toggle is toggled, change the read filed's value accordingly.
    });
};
```

### Show/hide certain column
Right click on the headers, you can see these options.

### Sort by certain column
Providing sorting algorithms to the event `columnSortingChanged`. Note: whenever the itemSource changed, you should call `RefreshItems()`.
```cs
listView.sortingEnabled = true;
listView.columnSortingChanged += () =>
{
    switch (listView.sortedColumns.First().columnName)
    {
        case "ID":
            displayedList.Sort((x, y) => (x.id - y.id));
            break;
        case "KIND":
            displayedList.Sort((x, y) => (x.kind - y.kind));
            break;
        case "TITLE":
            displayedList.Sort((x, y) => String.Compare(x.title,y.title));
            break;
        case "TIME":
            displayedList.Sort((x, y) => System.DateTime.Compare(x.time,y.time));
            break;
        case "READ":
            return;
    }
    if (listView.sortedColumns.First().direction == SortDirection.Descending)
    {
        displayedList.Reverse();
    }
    listView.RefreshItems();
};
```
### Copy a field of data
Add ContextualMenu for UI elements and add copy action.
```cs
private VisualElement CreateLabelWithContextualMenu()
{
    var label = new Label();
    // The manipulator handles the right click and sends a ContextualMenuPopulateEvent to the target element.
    // The callback argument passed to the constructor is automatically registered on the target element.
    label.AddManipulator(new ContextualMenuManipulator((evt) =>
    {
        evt.menu.AppendAction("Copy", (x) => 
            GUIUtility.systemCopyBuffer=label.text, DropdownMenuAction.AlwaysEnabled);
    }));
    return label;
}
```

### Multi read and copy operations
Change the selection mode to multiple: `listView.selectionType = SelectionType.Multiple`, then use `Button` to manipulate the selected data.
​
### Filter by Kind
use `EnumFlagsField` to set the filter's state.
```cs
rootVisualElement.Q<EnumFlagsField>("KIND").RegisterCallback<ChangeEvent<Enum>>(evt =>
{
    displayedList.Clear();
    foreach (var dataEntry in _dataManager.DataList)
    {
        // only these kinds included in filter are added to displayedList.
        if ((dataEntry.kind & (DataEntry.Kind)evt.newValue) > 0)
        {
            displayedList.Add(new DataEntry(dataEntry));
        }
    }

    // Note：displayedList.Count changed，so you should rebuild the listView. 
    listView.Rebuild();
});
```

## Others
Source Code: [goot4/DataPresentation](https://github.com/goot4/Blog-code-host/tree/main/DataPresentation)

Unity version: 2023.1.0 Windows
​