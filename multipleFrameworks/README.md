
# Architecture
                   (REACT)
****************Container****************
                    |        
    -------------------------------------
    |               |                   |
Marketing       Authentication      Dashboard
(REACT)             (REACT)           (VUE)

Inflexible Requirement #1

# Zero coupling between child projects:

+ No impoprting of fucntions/objects/classes/etc
+ No shared state
+ Shared libraries through MF is ok


Inflexible Requirement #2

# Near-zero coupling between container and child apps

+ Countainer shoudn't assume that a child is using a particular framework
+ Any necessary communication done with callbacks or simple events

Inflexible Requirement #3

# CSS from one project shouldn't affect another

Inflexible Requirement #4

# Version control (monorepo vs separate) shouldn't have any impact in the overall project

+ Some people want to use monorepos
+ some people want to keep everitihng in separate repo

Inflexible Requirement #5

# Container should be able to decide to always use the latest version of a microfrontend or specify a specific version

+ Container will always use the lastest version of a child app (doesn't require a redeploy of container)
+ Container can specify exactly what version of a child it wants to use (requires a redeploy to change)
