# plutarch-js

Microservice Configuration and Discovery on CouchDB

This is a utility library used to coordinate between services which share the
same configuration file.  It uses CouchDB as a backing service.  Please note
that this is just a quick tool to solve a small, practical problem.  It is not
general purpose and may not be the right fit for your system.

## Application States

Throughout their life cycles, applications will pass through the following
states:

1. Stopped: 

    The application is offline, or has not notified the cluster.

2. Starting: 

    The application has notified the cluster, but does not have up to date
    configuration.

3. Configured: 

    The application has up to date configuration, and will start running.

4. Running

    The application is serving requests.


Plutarch tracks this application state, as well as handling each of these
lifecycle stages.
