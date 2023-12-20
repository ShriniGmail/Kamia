from django.db import models
from django.contrib.auth.models import User

class KamiaPlane(models.Model):
    planeid = models.IntegerField()
    planename = models.CharField(max_length = 180)
    passengers = models.IntegerField()
    tankcapacity = models.DecimalField(max_digits=10, decimal_places=4, blank=True)
    fuelconsumption=models.DecimalField(max_digits=10, decimal_places=4, blank=True)
    flyminutesVal=models.DecimalField(max_digits=10, decimal_places=4, blank=True)
    flyminutes=models.CharField(max_length = 100, blank = True)
    updated = models.DateTimeField(auto_now = True, blank = True)
    #user = models.ForeignKey(User, on_delete = models.CASCADE, blank = True, null = True)

    def __str__(self):
        return self.id
    class Meta:
        app_label  = 'demo'
        managed = False