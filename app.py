import time
import sys

def printLyrics():
    songName= "Girls Like You"
    lyrics = [
        'Maybe its 6:45',
        'Maybe I\'m barely alive',
        "Maybe you have taken my shit for the last time, yeah",
        "Maybe I know that I'm drunk",
        "Maybe I know you're the one",
        "Maybe you thinking it's better if you drive",
        "Oh, cause girls like you run 'round with guys like me",
        "Till sundown when I come through",
        "I need a girl like you, yeah yeah"
    ]
    delay = [0.7, 0.2, 0.5, 0.5, 0.5, 1.1, 0.5, 0.5, 0.3]

    print("Girls Like You\n")
    time.sleep(1.2)

    for i, line in enumerate(lyrics):
        for char in line:
            sys.stdout.write(char)
            sys.stdout.flush()
            time.sleep(0.06)
        print()
        time.sleep(delay[i])
printLyrics()