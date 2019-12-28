from django.db import models


class Account(models.Model):
    class ColorChoices(models.TextChoices):
        RED = "f44336", "red"
        PINK = "e91e63", "pink"
        PURPLE = "9c27b0", "purple"
        DEEP_PURPLE = "673ab7", "deep purple"
        INDIGO = "3f51b5", "indigo"
        BLUE = "2196f3", "blue"
        LIGHT_BLUE = "03a9f4", "light blue"
        CYAN = "00bcd4", "cyan"
        TEAL = "009688", "teal"
        GREEN = "4caf50", "green"
        LIGHT_GREEN = "8bc34a", "light green"
        LIME = "cddc39", "lime"
        YELLOW = "ffeb3b", "yellow"
        AMBER = "ffc107", "amber"
        ORANGE = "ff9800", "orange"
        DEEP_ORANGE = "ff5722", "deep orange"
        BROWN = "795548", "brown"
        GREY = "9e9e9e", "grey"
        BLUE_GREY = "607d8b", "blue grey"
        WHITE = "ffffff", "white"
        BLACK = "000000", "black"

    name = models.CharField(max_length=100)
    color = models.CharField(
        max_length=6, choices=ColorChoices.choices, default=ColorChoices.GREEN
    )
    initial_balance = models.IntegerField()

    def __str__(self) -> str:
        return self.name
