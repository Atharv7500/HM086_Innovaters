import os
import django
import sys

# Add the backend to sys.path
sys.path.append('backend')
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'sdg_backend.settings')
django.setup()

from django.contrib.auth import get_user_model
User = get_user_model()

print(f"Total users: {User.objects.count()}")
for u in User.objects.all().order_by('-date_joined')[:5]:
    print(f"ID: {u.id} | Username: {u.username} | Email: {u.email} | Active: {u.is_active} | Has Pwd: {u.has_usable_password()}")
