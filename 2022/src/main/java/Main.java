package main.java;

import main.java.days.*;

public class Main {
    public static void main(String[] args) {
        Day day = new Day5();
        String answer1 = day.getAnswer(Day.Part.ONE);
        String answer2 = day.getAnswer(Day.Part.TWO);
        System.out.println(answer1);
        System.out.println(answer2);
    }
}