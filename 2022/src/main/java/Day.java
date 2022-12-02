package main.java;

public interface Day {
    String getAnswer(Part part);

    enum Part {
        ONE,
        TWO
    }
}
