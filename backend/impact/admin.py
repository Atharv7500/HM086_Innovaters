from django.contrib import admin
from .models import Milestone, ImpactMetric

@admin.register(Milestone)
class MilestoneAdmin(admin.ModelAdmin):
    list_display = ('title', 'project', 'status', 'due_date', 'progress_percentage')
    list_filter = ('status', 'due_date')
    search_fields = ('title', 'project__title')

@admin.register(ImpactMetric)
class ImpactMetricAdmin(admin.ModelAdmin):
    list_display = ('name', 'value', 'project')
    search_fields = ('name', 'project__title')
