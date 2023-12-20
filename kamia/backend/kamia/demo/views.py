from django.shortcuts import render
from django.contrib.auth.models import Group, User
from rest_framework import permissions, viewsets
from braces.views import CsrfExemptMixin
from datetime import datetime

from kamia.demo.serializers import GroupSerializer, UserSerializer, KamiaPlaneSerializer

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from kamia.demo.models import KamiaPlane

import math

class UserViewSet(CsrfExemptMixin,viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    #permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(CsrfExemptMixin,viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    #permission_classes = [permissions.IsAuthenticated]


class KamiaPlaneApiView(APIView):
    # add permission to check if user is authenticated
    #permission_classes = [permissions.IsAuthenticated]
    permission_classes = (permissions.AllowAny,)
    http_method_names = ['head','post']

    def post(self, request, *args, **kwargs):
  	# Load the data from posted data
        serializer = KamiaPlaneSerializer(data=request.data, many=True)
        serializer.is_valid()
        planes = [KamiaPlane(**item) for item in serializer.validated_data]
        for plane in planes:
            plane.tankcapacity = int(plane.planeid)*200
            plane.fuelconsumption=round(math.log(int(plane.planeid))*0.80 + int(plane.passengers)*0.002,4)
            plane.flyminutesVal=round(plane.tankcapacity/plane.fuelconsumption,4)
            frac, whole = math.modf(plane.flyminutesVal)
       	    plane.flyminutes=str(math.floor(whole))
        if serializer.is_valid():
            return Response(KamiaPlaneSerializer(planes, many=True).data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        


        
