from os import environ

class Config(object):
    CONNECTION_STRING = environ.get('APPLICATIONINSIGHTS_CONNECTION_STRING') or \
        'InstrumentationKey=a62c30e2-b1f3-461a-a6c4-9a624d0c1097;IngestionEndpoint=https://westus2-2.in.applicationinsights.azure.com/;LiveEndpoint=https://westus2.livediagnostics.monitor.azure.com/;ApplicationId=fffc2979-ffae-4939-ad23-e0bbb37b4a07'