# kamia/demo/tests.py

from rest_framework.test import APIClient
from django.test import TestCase, modify_settings
import json


class ApiTestCase(TestCase):

    def setUp(self):
        self.client = APIClient()
        
    def test_api_default(self):
        # Create a list of dictionaries representing your data
        data = [
            {"planeid": 1, "planename": "One", "passengers": 5, "fuelcapacity": 0},
            {"planeid": 2, "planename": "Two", "passengers": 6, "fuelcapacity": 0},
            {"planeid": 3, "planename": "Three", "passengers": 7, "fuelcapacity": 0},
        ]

        # Convert the list to a JSON string
        data_json = json.dumps(data)

        # Use the self.client.post method to send the JSON data
        response = self.client.post('http://127.0.0.1:8000/api', data_json, content_type='application/json')

        # Your assertions and validations here
        self.assertEqual(response.status_code, 201)
        # ...
        
    def test_api_values(self):
        # Create a list of dictionaries representing your data
        data = [
            {"planeid": 1, "planename": "One", "passengers": 5, "fuelcapacity": 0},
            {"planeid": 2, "planename": "Two", "passengers": 6, "fuelcapacity": 0},
            {"planeid": 3, "planename": "Three", "passengers": 7, "fuelcapacity": 0},
        ]

        # Convert the list to a JSON string
        data_json = json.dumps(data)

        # Use the self.client.post method to send the JSON data
        response = self.client.post('http://127.0.0.1:8000/api', data_json, content_type='application/json')
       
        self.assertEqual(float(response.data[0]['fuelconsumption']), .01)
        self.assertEqual(float(response.data[1]['fuelconsumption']), .5665)
        self.assertEqual(float(response.data[2]['fuelconsumption']), .8929)
        self.assertEqual(float(response.data[0]['flyminutes']), 20000)
        self.assertEqual(float(response.data[1]['flyminutes']), 706)
        self.assertEqual(float(response.data[2]['flyminutes']), 671)
        # ...        
        
        