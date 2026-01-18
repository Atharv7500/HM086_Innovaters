from django.contrib import admin
from .models import Project, CollaborationRequest

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'owner', 'created_at')
    search_fields = ('title', 'description')
    list_filter = ('created_at',)

@admin.register(CollaborationRequest)
class CollaborationRequestAdmin(admin.ModelAdmin):
    list_display = ('project', 'requester', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('project__title', 'requester__username')
