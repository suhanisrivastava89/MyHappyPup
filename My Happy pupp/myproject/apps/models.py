# models.py

from django.db import models
from django.contrib.auth.models import User


class MoodEntry(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    mood = models.CharField(max_length=100)
    weather = models.CharField(max_length=100)
    people = models.CharField(max_length=100)
    emotions = models.CharField(max_length=100)
    notes = models.TextField()
    image = models.ImageField(upload_to='images/', blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.username} - {self.created_at}'
