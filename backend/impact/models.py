from django.db import models
from projects.models import Project

class Milestone(models.Model):
    STATUS_CHOICES = (
        ('NOT_STARTED', 'Not Started'),
        ('IN_PROGRESS', 'In Progress'),
        ('COMPLETED', 'Completed'),
    )

    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='milestones')
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='NOT_STARTED')
    progress_percentage = models.PositiveIntegerField(default=0)
    due_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.project.title} - {self.title}"

class ImpactMetric(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='metrics')
    name = models.CharField(max_length=255) # e.g., "Lives Impacted"
    value = models.CharField(max_length=100) # e.g., "1000", "$50k"
    
    def __str__(self):
        return f"{self.name}: {self.value}"
