console.log("Hello world")

public class Solution {
    public String mergeAlternately(String word1, String word2) {
        StringBuilder merged = new StringBuilder();
        int i = 0, j = 0;
        
        while (i < word1.length() && j < word2.length()) {
            merged.append(word1.charAt(i));
            merged.append(word2.charAt(j));
            i++;
            j++;
        }
        
        // Append remaining characters from word1, if any
        while (i < word1.length()) {
            merged.append(word1.charAt(i));
            i++;
        }
        
        // Append remaining characters from word2, if any
        while (j < word2.length()) {
            merged.append(word2.charAt(j));
            j++;
        }
        
        return merged.toString();
    }
}

