package main.java.days;

import main.java.Day;
import main.java.util.FilesUtil;

import java.util.List;

public class Day4 implements Day {

    final String fileName = "day4.txt";

    @Override
    public String getAnswer(Part part) {
        List<String> lines = FilesUtil.getLines(fileName);
        return String.valueOf(getOverlap(lines, part));
    }

    private Integer getOverlap(List<String> lines, Part part) {
        Integer numberOfOverlap = 0;
        for (String line : lines) {
            String[] assignments = line.split(",");
            Task taskOne = getTask(assignments[0]);
            Task taskTwo = getTask(assignments[1]);
            if (part == Part.ONE && (taskOne.isCompletelyOverlappedBy(taskTwo) || taskTwo.isCompletelyOverlappedBy(taskOne))) {
                numberOfOverlap++;
            } else if (part == Part.TWO && (taskOne.hasOverlap(taskTwo) || taskTwo.hasOverlap(taskOne))) {
                numberOfOverlap++;
            }
        }
        return numberOfOverlap;
    }

    private Task getTask(String assignment) {
        Task task = new Task();
        String[] ends = assignment.split("-");
        task.setFirst(Long.valueOf(ends[0]));
        task.setLast(Long.valueOf(ends[1]));
        return task;
    }

    private class Task {
        Long first;
        Long last;

        public Long getFirst() {
            return first;
        }

        public void setFirst(Long first) {
            this.first = first;
        }

        public Long getLast() {
            return last;
        }

        public void setLast(Long last) {
            this.last = last;
        }

        public boolean isCompletelyOverlappedBy(Task otherTask) {
            return otherTask.getFirst() >= this.first && otherTask.getLast() <= this.last;
        }

        public boolean hasOverlap(Task otherTask) {
            return (otherTask.getFirst() <= this.first && otherTask.getLast() >= this.first) || (otherTask.getFirst() <= this.last && otherTask.getLast() >= this.last);
        }
    }
}
