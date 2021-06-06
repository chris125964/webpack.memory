#!/bin/bash

if [[ $# == 0 ]]
then
	export PROJECT=xxmemory
else
	export PROJECT=$1
fi

heroku apps:destroy $PROJECT -c $PROJECT
