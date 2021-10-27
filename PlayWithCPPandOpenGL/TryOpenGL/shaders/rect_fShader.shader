#version 430

out vec4 color;

uniform mat4 pMat, mvMat;
uniform vec3 col;

void main()
{
	color = vec4(col, 1.0);
}