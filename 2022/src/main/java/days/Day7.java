package main.java.days;

import main.java.Day;
import main.java.util.FilesUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Day7 implements Day {

    String fileName = "day7.txt";

    Integer sizeThreshold = 100000;

    @Override
    public String getAnswer(Part part) {
        Directory currentDirectory = new Directory("/", null);
        List<String> lines = FilesUtil.getLines(fileName);;
        for (String line : lines) {
            if (line.startsWith("$")) {
                currentDirectory = processUserInput(line.substring(1).trim(), currentDirectory);
            } else {
                processMachineOutput(line, currentDirectory);
            }
        }
        Directory topDirectory = getTopDirectory(currentDirectory);
        List<Directory> smallDirectories = getSmallDirectories(topDirectory);
        Integer sumOfDirectorySize = getSumOfDirectorySize(smallDirectories);
        return String.valueOf(sumOfDirectorySize);
    }

    private Integer getSumOfDirectorySize(List<Directory> smallDirectories) {
        Integer sum = 0;
        for (Directory directory : smallDirectories) {
            sum += getRecursiveFileSize(directory);
        }
        return sum;
    }

    private List<Directory> getSmallDirectories(Directory topDirectory) {
        ArrayList<Directory> smallDirectories = new ArrayList<>();
        checkAllDirectories(topDirectory, smallDirectories);
        return smallDirectories;
    }

    private void checkAllDirectories(Directory topDirectory, ArrayList<Directory> smallDirectories) {
        for (Directory localDirectory : topDirectory.getChildDirectories()) {
            Integer totalRecursiveSize = getRecursiveFileSize(localDirectory);
            if (totalRecursiveSize < sizeThreshold) {
                smallDirectories.add(localDirectory);
            }
            checkAllDirectories(localDirectory, smallDirectories);
        }
    }

    private Directory getTopDirectory(Directory currentDirectory) {
        if (currentDirectory.getParentDirectory() == null) {
            return currentDirectory;
        } else {
            return getTopDirectory(currentDirectory.getParentDirectory());
        }
    }

    private Directory processUserInput(String command, Directory currentDirectory) {
        if (command.startsWith("ls") || command.startsWith("cd /")) {
            return currentDirectory;
        } else if (command.startsWith("cd ..")) {
            return currentDirectory.getParentDirectory();
        } else if (command.startsWith("cd")) {
            return currentDirectory.getChildDirectory(command.substring(2).trim());
        }
        return currentDirectory;
    }

    private void processMachineOutput(String output, Directory currentDirectory) {
        if (output.startsWith("dir")) {
            currentDirectory.addChildDirectory(new Directory(output.substring(4), currentDirectory));
        } else {
            String[] outputSplit = output.split(" ");
            currentDirectory.addFile(new File(Integer.parseInt(outputSplit[0]), outputSplit[1]));
        }
    }

    public Integer getFileSize(Directory directory) {
        Integer totalSize = 0;
        for (File file : directory.getFileList()) {
            totalSize += file.getSize();
        }
        return totalSize;
    }

    public Integer getRecursiveFileSize(Directory topDirectory) {
        Integer recursiveFileSize = getFileSize(topDirectory);
        ArrayList<Directory> directories = getRecursiveDirectories(topDirectory);
        for (Directory directory : directories) {
            recursiveFileSize += getFileSize(directory);
        }
        return recursiveFileSize;
    }

    private ArrayList<Directory> getRecursiveDirectories(Directory directory) {
        ArrayList<Directory> directories = new ArrayList<>();
        getChildDirectories(directory, directories);
        return directories;
    }

    private void getChildDirectories(Directory directory, ArrayList<Directory> directories) {
        for (Directory localDirectory : directory.getChildDirectories()) {
            directories.add(localDirectory);
            getChildDirectories(localDirectory, directories);
        }
    }

    public class Directory {
        Directory parentDirectory;
        ArrayList<Directory> childDirectories;
        ArrayList<File> fileList;
        String name;

        public Directory(String name, Directory parentDirectory) {
            this.name = name;
            this.parentDirectory = parentDirectory;
            childDirectories = new ArrayList<>();
            fileList = new ArrayList<>();
        }

        public Directory getParentDirectory() {
            return parentDirectory;
        }

        public void setParentDirectory(Directory parentDirectory) {
            this.parentDirectory = parentDirectory;
        }

        public Directory getChildDirectory(String name) {
            for (Directory directory : childDirectories) {
                if (Objects.equals(directory.getName(), name)) {
                    return directory;
                }
            }
            return null;
        };

        public ArrayList<Directory> getChildDirectories() {
            return childDirectories;
        }

        public void setChildDirectories(ArrayList<Directory> childDirectories) {
            this.childDirectories = childDirectories;
        }

        public void addChildDirectory(Directory directory) {
            childDirectories.add(directory);
        }

        public ArrayList<File> getFileList() {
            return fileList;
        }

        public void setFileList(ArrayList<File> fileList) {
            this.fileList = fileList;
        }

        public void addFile(File file) {
            fileList.add(file);
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }

    public class File {
        String name;
        Integer size;

        public File(int size, String name) {
            this.size = size;
            this.name = name;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public Integer getSize() {
            return size;
        }

        public void setSize(Integer size) {
            this.size = size;
        }
    }
}
