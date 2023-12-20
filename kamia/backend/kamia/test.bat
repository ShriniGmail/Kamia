coverage erase
coverage run --branch ..\manage.py test kamia.demo
coverage report -m
coverage html
iexplore.exe htmlcov/index.html