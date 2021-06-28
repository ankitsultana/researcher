---
title: Bayesian Controller Fusion
filename: bcf/
layout: post
tagline: A responsive theme for your project on GitHub Pages
--- 

## Bayesian Controller Fusion

We present Bayesian Controller Fusion (BCF): a hybrid control strategy that combines the strengths of traditional hand-crafted controllers and model-free deep reinforcement learning. BCF thrives in the robotics domain, where reliable but suboptimal control priors exist. In this setting, reinforcement learning from scratch remains unsafe and data-inefficient, and leveraging the structure provided by existing controllers can help address these limitations.  We study BCF on two real-world robotics tasks involving navigation in a vast and long-horizon environment, and a more complex reaching task that involves manipulability maximisation. For both these domains, there exists simple handcrafted controllers that can solve the task at hand in a risk-averse manner, however do not necessarily exhibit the optimal solution given limitations in analytical modelling, controller miscalibration, and task variation. We show that by composing uncertainty-aware action outputs from these control algorithms, together with an RL policy, we can learn to both safely explore and deploy RL agents in unknown environments, while significantly improving the sample efficiency during training. More importantly, we find that BCF consistently and substantially improves beyond the performance of the control priors. We additionally show BCF's applicability to the sim-to-real setting as a reliable control strategy for robotics. BCF is a promising approach for combining the complementary strengths of deep RL and robotic control, surpassing what either can achieve independently.


