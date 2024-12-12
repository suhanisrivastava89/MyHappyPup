from django.contrib import admin
from .models import MoodEntry

class MoodEntryAdmin(admin.ModelAdmin):
    list_display = ('mood', 'weather', 'people', 'emotions', 'notes', 'image')
    list_filter = ('mood', 'weather', 'people', 'emotions')

admin.site.register(MoodEntry, MoodEntryAdmin)
