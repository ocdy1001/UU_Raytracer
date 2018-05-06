﻿using System;
using OpenTK;

namespace RaytraceEngine.Objects.Lights
{
    public class SpotLight : PointLight
    {
        public Vector3 Normal { get; set; }
        public float AngleMin = 45f;
        public float AngleMax = 55f;

        public override float AngleEnergy(Vector3 toLight)
        {
            float ang = (float)Math.Acos(Vector3.Dot(toLight, Normal)) * RMath.R2D;
            if (ang <= AngleMin) return 1f;
            if (ang > AngleMax) return 0f;
            return (AngleMax - ang) / (AngleMax - AngleMin);
        }
    }
}