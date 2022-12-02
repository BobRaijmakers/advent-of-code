package main.java;

import main.java.days.Day1;

import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        Day1 day1 = new Day1();
        String answer1 = day1.getAnwser(1);
        String answer2 = day1.getAnwser(2);
        System.out.println(answer1);
        System.out.println(answer2);
    }
}