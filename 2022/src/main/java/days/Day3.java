package main.java.days;

import main.java.Day;
import main.java.util.FilesUtil;

import java.util.*;

public class Day3 implements Day {

    final String fileName = "day3.txt";

    @Override
    public String getAnswer(Part part) {
        List<String> lines = FilesUtil.getLines(fileName);
        if (part == Part.ONE) {
            ArrayList<DuplicateItem> duplicateItemsArrayList = new ArrayList<>();
            Integer duplicatePriorityValue = 0;
            for (String line : lines) {
                DuplicateItem duplicateItem = getDuplicateItemFromLine(line);
                if (duplicateItem != null) {
                    duplicateItemsArrayList.add(duplicateItem);
                    duplicatePriorityValue += duplicateItem.getValue();
                }
            }
            return String.valueOf(duplicatePriorityValue);
        } else if (part == Part.TWO) {
            return String.valueOf(getGroupBadgeValues(lines));
        }
        return null;
    }

    private Integer getGroupBadgeValues(List<String> lines) {
        Integer totalGroupBadgeValue = 0;
        for (int i = 0; i < lines.size() + 1; i++) {
            if (i % 3 == 0 && i != 0) {
                DuplicateItem duplicateItem = getDuplicateItem(lines.get(i-3), lines.get(i-2), lines.get(i-1));
                if (duplicateItem != null) {
                    totalGroupBadgeValue += duplicateItem.getValue();
                }
            }
        }
        return totalGroupBadgeValue;
    }

    private DuplicateItem getDuplicateItem(String s, String s1, String s2) {
        DuplicateItem duplicateItem = new DuplicateItem();
        List<String> itemListOne = List.of(s.split(""));
        List<String> itemListTwo = List.of(s1.split(""));
        List<String> itemListThree = List.of(s2.split(""));
        for (String itemOne : itemListOne) {
            for (String itemTwo : itemListTwo) {
                for (String itemThree : itemListThree) {
                    if (Objects.equals(itemOne, itemTwo) && Objects.equals(itemTwo, itemThree)) {
                        // BINGO
                        duplicateItem.setItem(itemOne);
                        duplicateItem.setValue(getItemValue(itemOne));
                        return duplicateItem;
                    }
                }
            }
        }
        return null;
    }



    private DuplicateItem getDuplicateItemFromLine(String line) {
        DuplicateItem duplicateItem = new DuplicateItem();
        int lineMiddle = line.length() / 2;
        String[] compartments = {line.substring(0,lineMiddle),line.substring(lineMiddle)};
        List<String> itemListOne = List.of(compartments[0].split(""));
        List<String> itemListTwo = List.of(compartments[1].split(""));
        for (String itemOne : itemListOne) {
            if (itemListTwo.contains(itemOne)) {
                duplicateItem.setItem(itemOne);
                duplicateItem.setValue(getItemValue(itemOne));
                return duplicateItem;
            }
        }
        return null;
    }

    private Integer getItemValue(String itemOne) {
        HashMap<String, Integer> valueMap = getValueMap();
        return valueMap.get(itemOne);
    }

    private HashMap<String, Integer> getValueMap() {
        HashMap<String, Integer> valueMap = new HashMap<>();
        List<String> values = List.of("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""));
        for (int i = 0; i < values.size(); i++) {
            valueMap.put(values.get(i), i + 1);
        }
        return valueMap;
    }

    private class DuplicateItem {
        public Integer getValue() {
            return value;
        }

        public void setValue(Integer value) {
            this.value = value;
        }

        public String getItem() {
            return item;
        }

        public void setItem(String item) {
            this.item = item;
        }

        Integer value;
        String item;
    }
}
