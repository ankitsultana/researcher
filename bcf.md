---
title: Bayesian Controller Fusion
filename: bcf/
layout: post
tagline: Leveraging Control Priors in Deep Reinforcement Learning for Robotics
--- 

## Abstract

We present Bayesian Controller Fusion (BCF): a hybrid control strategy that combines the strengths of traditional hand-crafted controllers and model-free deep reinforcement learning (RL). BCF thrives in the robotics domain, where reliable but suboptimal control priors exist for many tasks, but RL from scratch remains unsafe and data-inefficient. By fusing uncertainty-aware distributional outputs from each system, BCF arbitrates control between them, exploiting their respective strengths. We study BCF on two real-world robotics tasks involving navigation in a vast and long-horizon environment, and a complex reaching task that involves manipulability maximisation. For both these domains, there exist simple handcrafted controllers that can solve the task at hand in a risk-averse manner but do not necessarily exhibit the optimal solution given limitations in analytical modelling, controller miscalibration and task variation. As exploration is naturally guided by the prior in the early stages of training, BCF accelerates learning, while substantially improving beyond the performance of the control prior, as the policy gains more experience. More importantly, given the risk-aversity of the control prior, BCF ensures safe exploration and deployment, where the control prior naturally dominates the action distribution in states unknown to the policy. We additionally show BCF's applicability to the zero-shot sim-to-real setting and its ability to deal with out-of-distribution states in the real-world. BCF is a promising approach for combining the complementary strengths of deep RL and traditional robotic control, surpassing what either can achieve independently.

<p align="center">
  <img src="/images/bcf.png" />
</p>

