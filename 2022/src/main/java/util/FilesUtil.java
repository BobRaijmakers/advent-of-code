package main.java.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

public class FilesUtil {
    public static List<String> getLines(String fileName) {
        String resourcesPath = "../../resources/";
        URL url = FilesUtil.class.getResource(resourcesPath + fileName);
        assert url != null;
        File file = new File(url.getPath());
        ArrayList<String> lines = new ArrayList<>();
        try (BufferedReader reader = new BufferedReader(new FileReader(file))) {
            String line;
            line = reader.readLine();
            while (line != null) {
                lines.add(line);
                line = reader.readLine();
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return lines;
    }
}
