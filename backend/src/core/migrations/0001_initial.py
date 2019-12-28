# Generated by Django 3.0.1 on 2019-12-28 04:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Account",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=100)),
                (
                    "color",
                    models.CharField(
                        choices=[
                            ("f44336", "red"),
                            ("e91e63", "pink"),
                            ("9c27b0", "purple"),
                            ("673ab7", "deep purple"),
                            ("3f51b5", "indigo"),
                            ("2196f3", "blue"),
                            ("03a9f4", "light blue"),
                            ("00bcd4", "cyan"),
                            ("009688", "teal"),
                            ("4caf50", "green"),
                            ("8bc34a", "light green"),
                            ("cddc39", "lime"),
                            ("ffeb3b", "yellow"),
                            ("ffc107", "amber"),
                            ("ff9800", "orange"),
                            ("ff5722", "deep orange"),
                            ("795548", "brown"),
                            ("9e9e9e", "grey"),
                            ("607d8b", "blue grey"),
                            ("ffffff", "white"),
                            ("000000", "black"),
                        ],
                        default="4caf50",
                        max_length=6,
                    ),
                ),
                ("initial_balance", models.IntegerField()),
            ],
        ),
    ]
