package main.java.days;

import main.java.Day;
import main.java.util.FilesUtil;

import java.util.List;
import java.util.Map;

public class Day2 implements Day {

    String fileName = "day2.txt";

    @Override
    public String getAnswer(Part part) {
        List<String> lines = FilesUtil.getLines(fileName);
        Integer scoreTotal = 0;
        for (String line : lines) {
            Integer score = getScore(line, part);
            scoreTotal += score;
        }
        return String.valueOf(scoreTotal);
    }


    private Integer getScore(String line, Part part) {
        int score = 0;
        Map<String, Choice> choiceMapping = Map.of("A", Choice.ROCK, "B", Choice.PAPER, "C", Choice.SCISSOR, "X", Choice.ROCK, "Y", Choice.PAPER, "Z", Choice.SCISSOR);
        String[] values = line.split(" ");
        Choice myChoice = null;
        Choice theirChoice = choiceMapping.get(values[0]);
        if (part == Part.ONE) {
            myChoice = choiceMapping.get(values[1]);
        } else if (part == Part.TWO) {
            myChoice = getMyChoice(theirChoice, values[1]);
        }
        score = getChoicePoints(myChoice) + getResultPoints(myChoice, theirChoice);
        return score;
    }

    private Choice getMyChoice(Choice theirChoice, String desiredResultString) {
        Map<String, Result> desiredResultMap = Map.of("X", Result.LOSE, "Y", Result.DRAW, "Z", Result.WIN);
        Result desiredResult = desiredResultMap.get(desiredResultString);
        if (desiredResult == Result.DRAW) {
            return theirChoice;
        }
        if (theirChoice == Choice.ROCK) {
            if (desiredResult == Result.LOSE) {
                return Choice.SCISSOR;
            } else if (desiredResult == Result.WIN) {
                return Choice.PAPER;
            }
        } else if (theirChoice == Choice.PAPER) {
            if (desiredResult == Result.LOSE) {
                return Choice.ROCK;
            } else if (desiredResult == Result.WIN) {
                return Choice.SCISSOR;
            }
        } else if (theirChoice == Choice.SCISSOR) {
            if (desiredResult == Result.LOSE) {
                return Choice.PAPER;
            } else if (desiredResult == Result.WIN) {
                return Choice.ROCK;
            }
        }
        return null;
    }

    private Integer getChoicePoints(Choice myChoice) {
        Map<Choice, Integer> pointsMap = Map.of(Choice.ROCK, 1, Choice.PAPER, 2, Choice.SCISSOR, 3);
        return pointsMap.get(myChoice);
    }

    private Integer getResultPoints(Choice myChoice, Choice theirChoice) {
        if (myChoice == theirChoice) {
            // DRAW
            return 3;
        } else if (
            (myChoice == Choice.ROCK && theirChoice == Choice.SCISSOR) ||
            (myChoice == Choice.PAPER && theirChoice == Choice.ROCK) ||
            (myChoice == Choice.SCISSOR && theirChoice == Choice.PAPER)
        ) {
            // WIN
            return 6;
        } else {
            // LOSS
            return 0;
        }
    }

    enum Choice {
        ROCK,
        PAPER,
        SCISSOR
    }

    enum Result {
        LOSE,
        DRAW,
        WIN
    }
}
