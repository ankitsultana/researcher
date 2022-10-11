---
title: Residual Skill Polcies
filename: reskill/
layout: post
youtubeId: NjOz7-TqVlk
tagline: Learning an Adaptable Skill-based Action Space for Reinforcement Learning for Robotics
authors: Krishan Rana*, Ming Xu, Brendan Tidd, Michael Milford and Niko Suenderhauf
--- 

## Summary

<p align="center">
  <img src="/images/bcf_system.png" />
</p>
<p align="center">
    <em>Residual Skill Policies Framework</em>
</p>

<br/><br/>
Skill-based reinforcement learning (RL) has emerged as a promising strategy to leverage prior knowledge for accelerated robot learning. Skills are typically extracted from expert demonstrations and are embedded into a latent space from which they can be sampled as actions by a high-level RL agent. However, this <it>skill space<\it> is expansive, and not all skills are relevant for a given robot state, making exploration difficult. Furthermore, the downstream RL agent is limited to learning structurally similar tasks to those used to construct the skill space. We firstly propose accelerating exploration in the skill space using state-conditioned generative models to directly bias the high-level agent towards <it>sampling<\it> skills relevant to a given state based on prior experience. Next, we propose a low-level residual policy for fine-grained <it>skill adaptation<\it> enabling downstream RL agents to adapt to unseen task variations. Finally, we validate our approach across four challenging manipulation tasks that differ from those used to build the skill space, demonstrating our ability to learn across task variations while significantly accelerating exploration, outperforming prior works.
<br/><br/>

## Supplementary Video

<p align="center">
  {% include youtubePlayer.html id=page.youtubeId %}
</p>
<br/><br/>

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
