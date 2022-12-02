package main.java.days;

import main.java.Day;
import main.java.util.FilesUtil;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Day1 implements Day {
    final String fileName = "day1.txt";

    @Override
    public String getAnswer(Part part) {
        List<String> lines = FilesUtil.getLines(fileName);
        ArrayList<TotalCaloriesElf> totalCaloriesArrayList = getTotalCalories(lines);
        if (part == Part.ONE) {
            TotalCaloriesElf highestElf = getHighestElf(totalCaloriesArrayList);
            return String.valueOf(highestElf.getCaloriesTotal());
        } else if (part == Part.TWO) {
            List<TotalCaloriesElf> totalCaloriesElfList = getSortedHighestElfs(totalCaloriesArrayList);
            return String.valueOf(getSumOfHighestThreeCalories(totalCaloriesElfList));
        }
        return null;
    }

    private Integer getSumOfHighestThreeCalories(List<TotalCaloriesElf> totalCaloriesElfList) {
        int listLength = totalCaloriesElfList.size();
        return totalCaloriesElfList.get(listLength-1).getCaloriesTotal() + totalCaloriesElfList.get(listLength-2).getCaloriesTotal() + totalCaloriesElfList.get(listLength-3).getCaloriesTotal();
    }

    private List<TotalCaloriesElf> getSortedHighestElfs(ArrayList<TotalCaloriesElf> totalCaloriesArrayList) {
        totalCaloriesArrayList.sort(Comparator.comparing(TotalCaloriesElf::getCaloriesTotal));
        return totalCaloriesArrayList;
    }

    private TotalCaloriesElf getHighestElf(ArrayList<TotalCaloriesElf> totalCaloriesElfArrayList) {
        TotalCaloriesElf highestTotalCaloriesElf = totalCaloriesElfArrayList.get(0);
        for (TotalCaloriesElf totalCaloriesElf : totalCaloriesElfArrayList) {
            if (totalCaloriesElf.getCaloriesTotal() > highestTotalCaloriesElf.getCaloriesTotal()) {
                highestTotalCaloriesElf = totalCaloriesElf;
            }
        }
        return highestTotalCaloriesElf;
    }

    private ArrayList<TotalCaloriesElf> getTotalCalories(List<String> lines) {
        ArrayList<TotalCaloriesElf> totalCalories = new ArrayList<>();
        int localElfIndex = 1;
        int localTotalCalories = 0;
        for (String line : lines) {
            if (line != null && !line.equals("")) {
                localTotalCalories += Integer.parseInt(line);
            } else {
                TotalCaloriesElf newTotalCalories = new TotalCaloriesElf();
                newTotalCalories.setElfIndex(localElfIndex);
                newTotalCalories.setCaloriesTotal(localTotalCalories);
                totalCalories.add(newTotalCalories);
                localElfIndex += 1;
                localTotalCalories = 0;
            }
        }
        return totalCalories;
    }
    private static class TotalCaloriesElf {
        Integer elfIndex;

        Integer caloriesTotal;

        public Integer getElfIndex() {
            return elfIndex;
        }

        public void setElfIndex(int elfIndex) {
            this.elfIndex = elfIndex;
        }

        public Integer getCaloriesTotal() {
            return caloriesTotal;
        }

        public void setCaloriesTotal(int caloriesTotal) {
            this.caloriesTotal = caloriesTotal;
        }
    }
}
