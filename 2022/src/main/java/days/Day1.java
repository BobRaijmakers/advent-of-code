package main.java.days;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

public class Day1 {
    public String getAnwser(int part) throws IOException {
        List<String> lines = getLines();
        ArrayList<TotalCaloriesElf> totalCaloriesArrayList = getTotalCalories(lines);
        if (part == 1) {
            TotalCaloriesElf highestElf = getHighestElf(totalCaloriesArrayList);
            return String.valueOf(highestElf.getCaloriesTotal());
        } else if (part == 2) {
            List<TotalCaloriesElf> totalCaloriesElfList = getSortedHighestElfs(totalCaloriesArrayList);
            return String.valueOf(getSumOfHighestThreeCalories(totalCaloriesElfList));
        }
        return null;
    }

    private Integer getSumOfHighestThreeCalories(List<TotalCaloriesElf> totalCaloriesElfList) {
        Integer listLength = totalCaloriesElfList.size();
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

    public List<String> getLines() throws IOException {
        BufferedReader reader;
        String filePath = "../../resources/day1.txt";
        URL url = getClass().getResource(filePath);
        assert url != null;
        File file = new File(url.getPath());
        ArrayList<String> lines = new ArrayList<>();
        reader = new BufferedReader(new FileReader(file));
        String line = reader.readLine();
        while (line != null) {
            lines.add(line);
            line = reader.readLine();
        }
        reader.close();
        return lines;
    }

    public static class TotalCaloriesElf {
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
