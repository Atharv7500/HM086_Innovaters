
from django.contrib.auth import get_user_model
from projects.models import Project
from impact.models import Milestone

User = get_user_model()
try:
    admin_user = User.objects.get(username='admin')
    
    if not Project.objects.exists():
        p = Project.objects.create(
            owner=admin_user,
            title="Clean Water Initiative (Sample)",
            description="A sample project to demonstrate the database is working.",
            sdg_goals=["Goal 6: Clean Water"]
        )
        Milestone.objects.create(
            project=p,
            title="Phase 1: Survey",
            status="COMPLETED",
            progress_percentage=100
        )
        print("Sample project created successfully.")
    else:
        print("Projects already exist. Skipping sample creation.")
except User.DoesNotExist:
    print("Admin user not found. Create superuser first.")
