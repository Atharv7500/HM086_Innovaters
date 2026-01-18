# build_files.sh
set -e
pip install -r requirements.txt
cd backend
python3.9 manage.py collectstatic --noinput --clear
python3.9 manage.py migrate
