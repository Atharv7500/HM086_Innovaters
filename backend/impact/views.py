from rest_framework import viewsets
from .models import Milestone, ImpactMetric
from .serializers import MilestoneSerializer, ImpactMetricSerializer

class MilestoneViewSet(viewsets.ModelViewSet):
    queryset = Milestone.objects.all()
    serializer_class = MilestoneSerializer

class ImpactMetricViewSet(viewsets.ModelViewSet):
    queryset = ImpactMetric.objects.all()
    serializer_class = ImpactMetricSerializer
