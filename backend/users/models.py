from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    ROLE_CHOICES = (
        ('STARTUP', 'Startup'),
        ('NGO', 'NGO'),
        ('GOVERNMENT', 'Government'),
        ('RESEARCH', 'Research'),
    )
    
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='STARTUP')
    organization_name = models.CharField(max_length=255, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    sdgs_of_interest = models.JSONField(default=list, blank=True)  # Store SDG IDs/names as list

    def __str__(self):
        return f"{self.username} ({self.get_role_display()})"
