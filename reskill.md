---
title: Residual Skill Polcies
filename: reskill/
layout: post
youtubeId: NjOz7-TqVlk
tagline: Learning an Adaptable Skill-based Action Space for Reinforcement Learning for Robotics
authors: Krishan Rana*, Ming Xu, Brendan Tidd, Michael Milford and Niko Suenderhauf
--- 

## Summary

Skill-based reinforcement learning (RL) has emerged as a promising strategy to leverage prior knowledge for accelerated robot learning. Skills are typically extracted from expert demonstrations and are embedded into a latent space from which they can be sampled as actions by a high-level RL agent. However, this *skill space* is expansive, and not all skills are relevant for a given robot state, making exploration difficult. Furthermore, the downstream RL agent is limited to learning structurally similar tasks to those used to construct the skill space. We firstly propose accelerating exploration in the skill space using state-conditioned generative models to directly bias the high-level agent towards *sampling* skills relevant to a given state based on prior experience. Next, we propose a low-level residual policy for fine-grained *skill adaptation* enabling downstream RL agents to adapt to unseen task variations. Finally, we validate our approach across four challenging manipulation tasks that differ from those used to build the skill space, demonstrating our ability to learn across task variations while significantly accelerating exploration, outperforming prior works.
<br/><br/>

## Skill Extraction from Classical Controllers
  
<p align="center">
  <img src="/images/skill_extraction.png" width="600" />
</p>
<p align="center">
    <em>We decompose trajectories produced by a classical controller into task agnostic skills. To increase the diversity of skills extracted we add smooth, correlated Perlin noise to the action outputs from the controller.</em>
</p>

<br/><br/>
  
## Learning a State-Conditioned Skill Space
  
 <p align="center">
  <img src="/images/skill_module.png" />
</p>
<p align="center">
    <em>We train a VAE embedding module that encodes skills into a latent embedding space Z. This module is comprised of an encoder and closed-loop decoder, where the decoder recovers atomic actions from a latent skill embedding z. The state-conditioned skill prior module is used to generate relevant skills for a given robot state which the downstream Rl agent can directly sample from. This conditional density is multimodal in the skill-space and we estimate it using normalising flows. Both modules are trained jointly with the coloured arrows illustrating the gradient flow between them.</em>
</p>
  
<br/><br/>
  
## Adaptable and Guided Skill Based Reinforcement Learning
    
<p align="center">
  <img src="/images/reskill.png" width="800" />
</p>
<p align="center">
    <em>A skill-based learning framework for robotics. The skill prior guides exploration by transforming the agent's action space to a state-conditioned skill-space using normalising flows, where only the relevant skills for the current state are explored. The residual policy allows for fine-grained adaptation of the skills to environment variations and unseen tasks. The snowflake symbol signifies that the pre-trained weights for the skill modules are frozen during downstream task learning.</em>
</p>
  
<br/><br/>
 
## Results

<p align="center">
  <img src="/images/reskill_training_curves.png" />
</p>

<p align="center">
  <img src="/images/reskill_training_curves_ablation.png" />
</p>

<br/><br/>

### Skill Adaptation to Task Variations Using the Low-Level Residual Policy

<br/><br/>

<p align="center"> 
  Without Low-Level Residual Policy
</p>

Table-Cleanup         |  Slippery Push        |   Pyramid-Stack                 |      Complex-Hook               |
:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:
![](/images/table-cleanup.gif)  |  ![](/images/slippery_push2.gif) | ![](/images/stacking.gif)  |  ![](/images/stacking.gif)

<p align="center"> 
  With Low-Level Residual Policy (ReSkill)
</p>

Table-Cleanup         |  Slippery Push        |   Pyramid-Stack                 |      Complex-Hook               |
:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:
![](/images/table_cleanup_no_res_2.gif)  |  ![](/images/slippery_push_no_res.gif) | ![](/images/stacking_no_res.gif)  |  ![](/images/stacking.gif)


## Citation
```
  @article{rana2022reskill,
    title={Residual Skill Policies: Learning an Adaptable Skill-based Action Space for Reinforcement Learning for Robotics},
    author={Rana, Krishan and Xu, Ming and Tidd, Brendan and Milford, Michael and S{\"u}nderhauf, Niko},
    journal={Conference on Robot Learning (CoRL) 2022},
    year={2022}
  }
```
<br/><br/>

## Research Support

<p align="center">
  <img src="/images/logos.png" />
</p>
