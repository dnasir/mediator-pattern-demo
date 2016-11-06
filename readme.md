Mediator pattern demo
===

This is a simple demonstration to showcase how the mediator pattern could be implemented to build loosely-coupled module-based web applications.

Each module has no knowledge of how the other modules work, neither do they have direct access to their methods. The only way for them to communicate is through the mediator via event pub-sub pattern.