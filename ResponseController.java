package com.example.backend;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/response")
public class ResponseController {

    @PostMapping
    public LoveLetter handleResponse(@RequestBody Choice choice) {
        String title = "Every Moment with You, Vaishu ❤️";
        String message;

        if ("Yes".equalsIgnoreCase(choice.getChoice()) || "Of Course, Yes".equalsIgnoreCase(choice.getChoice())) {
            message = "Every moment with you, Vaishu Putta, is a treasure. From the silly arguments to the quiet times, "
                    + "the laughter to the tears, it's all been perfect because it's been with you. You're not just my love; "
                    + "you're my answered prayer, my everything. Wanna know the secret about Likshu? It’s that he’s the luckiest "
                    + "guy alive because of you.";
        } else {
            message = "No? Oh, come on! You know you love me too ❤️";
        }

        return new LoveLetter(title, message);
    }
}
