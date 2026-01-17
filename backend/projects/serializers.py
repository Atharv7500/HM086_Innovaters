from rest_framework import serializers
from .models import Project, CollaborationRequest
from users.serializers import UserSerializer

class ProjectSerializer(serializers.ModelSerializer):
    owner = UserSerializer(read_only=True)
    
    class Meta:
        model = Project
        fields = '__all__'

class CollaborationRequestSerializer(serializers.ModelSerializer):
    requester = UserSerializer(read_only=True)
    project_title = serializers.CharField(source='project.title', read_only=True)

    class Meta:
        model = CollaborationRequest
        fields = '__all__'
