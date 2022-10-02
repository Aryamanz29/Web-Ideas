#version 430
layout(location = 0) in vec2 pos;

uniform mat4 pMat, mvMat;
uniform vec3 col;

void main()
{
	gl_Position = pMat * mvMat * vec4(pos, 0.0f, 1.0f);
}