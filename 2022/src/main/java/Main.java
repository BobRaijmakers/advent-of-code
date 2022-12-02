package main.java;

import main.java.days.Day1;

public class Main {
    public static void main(String[] args) {
        Day1 day1 = new Day1();
        String answer1 = day1.getAnswer(1);
        String answer2 = day1.getAnswer(2);
        System.out.println(answer1);
        System.out.println(answer2);
    }
}