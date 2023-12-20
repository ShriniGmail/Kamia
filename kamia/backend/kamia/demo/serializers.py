from django.contrib.auth.models import Group, User
from rest_framework import serializers
from kamia.demo.models import KamiaPlane


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class KamiaPlaneSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = KamiaPlane
        fields = ['planeid', 'planename', 'passengers', 'tankcapacity', 'fuelconsumption', 'flyminutes']        