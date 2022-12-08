package main.java.days;

import main.java.Day;
import main.java.util.FilesUtil;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Day5 implements Day {

    final String fileNameStacks = "day5Stacks.txt";
    final String fileNameMoves = "day5Movement.txt";

    @Override
    public String getAnswer(Part part) {
        ArrayList<ArrayList<String>> crateStacks = getCrateStacks();
        List<Move> moveList = getMoveList();
        doStackMoves(crateStacks, moveList, part);
        return getLastForEachStack(crateStacks);
    }

    private String getLastForEachStack(ArrayList<ArrayList<String>> crateStacks) {
        StringBuilder lastForEachStack = new StringBuilder();
        for (ArrayList<String> stack : crateStacks) {
            lastForEachStack.append(stack.get(stack.size() - 1));
        }
        return lastForEachStack.toString();
    }

    private void doStackMoves(ArrayList<ArrayList<String>> crateStacks, List<Move> moveList, Part part) {
        for (Move move : moveList) {
            doMove(crateStacks, move, part);
        }
    }

    private void doMove(ArrayList<ArrayList<String>> crateStacks, Move move, Part part) {
        int quantity = move.getQuantity();
        int from = move.getFrom() - 1;
        int to = move.getTo() - 1;

        ArrayList<String> crateList = new ArrayList<>();
        for (int i = 0; i < quantity; i++) {
            crateList.add(crateStacks.get(from).get(crateStacks.get(from).size() - 1));
            crateStacks.get(from).remove(crateStacks.get(from).size() -1);
        }
        if (part == Part.TWO) Collections.reverse(crateList);
        for (String crate : crateList) {
            crateStacks.get(to).add(crate);
        }
    }

    private List<Move> getMoveList() {
        ArrayList<Move> moveArrayList = new ArrayList<>();
        List<String> linesStacks = FilesUtil.getLines(fileNameMoves);
        for (String line : linesStacks) {
            moveArrayList.add(getMove(line));
        }
        return moveArrayList;
    }

    private Move getMove(String line) {
        Move move = new Move();
        String[] lineSplit = line.split(" ");
        move.setQuantity(Integer.parseInt(lineSplit[1]));
        move.setFrom(Integer.parseInt(lineSplit[3]));
        move.setTo(Integer.parseInt(lineSplit[5]));
        return move;
    }

    private ArrayList<ArrayList<String>> getCrateStacks() {
        ArrayList<ArrayList<String>> crateStacks = new ArrayList<>();
        List<String> linesStacks = FilesUtil.getLines(fileNameStacks);
        for (int i = 0; i < linesStacks.size(); i++) {
            crateStacks.add(i, new ArrayList<>());
            for (String crate : linesStacks.get(i).split("")) {
                crateStacks.get(i).add(crate);
            }
        }
        return crateStacks;
    }

    private class Move {
        int quantity;
        int from;
        int to;

        public int getQuantity() {
            return quantity;
        }

        public void setQuantity(int quantity) {
            this.quantity = quantity;
        }

        public int getFrom() {
            return from;
        }

        public void setFrom(int from) {
            this.from = from;
        }

        public int getTo() {
            return to;
        }

        public void setTo(int to) {
            this.to = to;
        }
    }
}
