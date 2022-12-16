package main.java.days;

import main.java.Day;
import main.java.util.FilesUtil;

import java.util.*;

public class Day6 implements Day {

    final String fileName = "day6.txt";

    Integer packetSize = 4;

    @Override
    public String getAnswer(Part part) {
        List<String> lines = FilesUtil.getLines(fileName);
        if (part == Part.TWO) {
            packetSize = 14;
        }
        Integer startOfPacketNumber = getStartOfPacketNumber(lines.get(0));
        return String.valueOf(startOfPacketNumber);
    }

    private Integer getStartOfPacketNumber(String s) {
        List<String> packetNumbers = List.of(s.split(""));
        for (int i = 0; i < packetNumbers.size(); i++) {
            Set<String> set = new HashSet<>(getPacketSet(i, packetNumbers));
            if (set.size() == packetSize) {
                return i + packetSize;
            }
        }
        return null;
    }

    private List<String> getPacketSet(int i, List<String> packetNumbers) {
        List<String> packetSet = new ArrayList<>();
        for (int j = 0; j < packetSize; j++) {
            packetSet.add(packetNumbers.get(j+i));
        }
        return packetSet;
    }
}
