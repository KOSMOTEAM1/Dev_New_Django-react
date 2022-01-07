from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from .models import Board, comment
from .serializers import BoardSerializer, commentSerializer
import logging
from django.http import Http404

logger = logging.getLogger(__name__)


class ListBoard(generics.ListCreateAPIView):
    queryset = Board.objects.order_by('-id')
    serializer_class = BoardSerializer


class ListBoardTop5(generics.ListCreateAPIView):
    queryset = Board.objects.order_by('-readcount')[:5]
    serializer_class = BoardSerializer


class DetailBoard(generics.RetrieveUpdateDestroyAPIView):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer


class ListComment(generics.ListCreateAPIView):
    queryset = comment.objects.all()
    serializer_class = commentSerializer
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

""" class DetailComment(APIView):
    def get(request, pk):
        return comment.objects.filter(board_id=pk)
 """


class deleteComment(generics.RetrieveUpdateDestroyAPIView):
    queryset = comment.objects.all()
    serializer_class = commentSerializer


class DetailComment(APIView):
    def get_object(self, pk):
        try:
            return comment.objects.filter(board_id=pk)
        except comment.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        comment = self.get_object(pk)
        serializer = commentSerializer(comment, many=True)
        return Response(serializer.data)
