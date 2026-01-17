from rest_framework import viewsets
from .models import Project, CollaborationRequest
from .serializers import ProjectSerializer, CollaborationRequestSerializer
from rest_framework.decorators import action
from rest_framework.response import Response

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def perform_create(self, serializer):
        # For prototype, if no auth, default to first user or handle error
        if self.request.user.is_authenticated:
            serializer.save(owner=self.request.user)
        else:
            # Fallback for unauthenticated prototype testing
            from django.contrib.auth import get_user_model
            User = get_user_model()
            first_user = User.objects.first()
            if first_user:
                serializer.save(owner=first_user)
            else:
                 # Should fail or create a dummy user
                 pass

class CollaborationRequestViewSet(viewsets.ModelViewSet):
    queryset = CollaborationRequest.objects.all()
    serializer_class = CollaborationRequestSerializer

    def perform_create(self, serializer):
        if self.request.user.is_authenticated:
            serializer.save(requester=self.request.user)
        else:
             # Fallback
            from django.contrib.auth import get_user_model
            User = get_user_model()
            first_user = User.objects.first()
            if first_user:
                serializer.save(requester=first_user)
