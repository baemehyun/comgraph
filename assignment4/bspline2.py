import numpy as np
import matplotlib.pyplot as plt

def bspline_curve_point(control_points, knots, degree, u):
    '''P(u) = summation of p(k)*B(k,d)(u)'''
    num_control_points = len(control_points)
    curve_point = np.zeros_like(control_points[0])
    # Compute the point on the curve using the B-spline basis functions
    for k in range(num_control_points):
        basis_val = B(k, degree, knots, u)
        # print(basis_val)
        curve_point += control_points[k] * basis_val
    # print('curve point',curve_point)
    
    return curve_point

def B(k, d, knots, u):
    if d == 1:
        # Base case: degree parameter 1
        if knots[k] <= u < knots[k+1]:
            return 1.0  
        else: return 0.0
    
    # Compute the denominator terms
    left_denom = knots[k + d-1] - knots[k]
    right_denom = knots[k + d] - knots[k + 1]
    
    # Recursive calculation of the B-spline basis functions
    if left_denom == 0:
        left_term = 0
    else:
        left_term = (u - knots[k]) / left_denom * B(k, d - 1, knots, u)
    if right_denom == 0:
        right_term = 0
    else:
        right_term = (knots[k + d] - u) / right_denom * B(k + 1, d - 1, knots, u)
    
    return left_term + right_term

def bspline_curve(control_points, knots, degree_param, num_samples=100):
    # u_values = np.linspace(knots[0], knots[-1], num_samples)
    u_values = np.linspace(knots[degree_param-1], knots[len(control_points)], num_samples)
    # u_values = np.linspace(degree_param-1, len(control_points), num_samples)
    # print(degree_param-1,len(control_points))
    # print(knots[degree_param-1],knots[len(control_points)])
    curve_points = np.array([bspline_curve_point(control_points, knots, degree_param, u) for u in u_values])
    # print(curve_points)
    return curve_points
# control_points1 = np.array([[13.0, -1.0], [5.0,5.0], [-1.0 ,13.0], [11.0, 23.0], [5.0, 26.0], [-1.0, 29.0]])
control_points1 = np.array([[-1.0, 27.0], [4.0, 26.0], [10.0, 23.0], [0.0 ,12.0], [7.0,4.0],[11.5, 0.0]])
control_points2 = np.array([[0.0, 23.0], [4.0, 25.75], [9.0, 28.0], [12.0 ,23.0], [16.0,25.0],[18.0,24.0],[22.0,20.0]])
control_points3 = np.array([[23.0, 28.0], [17.85,23.1], [16.0 ,20.0], [22.0, 11.0], [16.0, 4.0], [12.0,1.0]])
control_points4 = np.array([[1.0, 7.0], [6.9,4.4],[11.6,3.4], [16.2, 4.4], [21.0, 7.0], ])
control_points5 = np.array([[14.0,15.0], [17.0,20.0],[20.0,25.0], [25.0,23.0], [26.0,15.0], [20.0, 10.0],[15.0,10.0] ])
control_points6 = np.array([[15.0,14.0], [18.0,17.8],[20.0,23.0],[24.0,21.0], [23.0,15.0], [20.2,12.5], [15.0, 12.0] ])
# control_points6 = np.array([[15.0,18.0], [17.0,20.0],[], [], [.0, .0], ])
# control_points4 = np.array([[21.0, 7.0], [18.0,6.0], [15.0 ,5.0], [12.0, 5.0], [9.0, 6.0], [6.0, 7.0]])
set_of_control_point = []
set_of_control_point.append(control_points1)
set_of_control_point.append(control_points2)
set_of_control_point.append(control_points3)
set_of_control_point.append(control_points4)
set_of_control_point.append(control_points5)
set_of_control_point.append(control_points6)
plt.figure(figsize=(8, 6))
#num_knot = n+d+1 
# knots = np.array([0, 1, 2, 3, 4, 5, 6, 7, 8])  # Example knot vector

degree_Bspline = 3  # Degree of the B-spline curve
degree_parameter = degree_Bspline+1 #

# print(len(control_points),degree_parameter,knots)
# curve_point2 = bspline_curve_point2(control_points, knots, degree_parameter, u)
# print(f"Point on B-spline curve at u = {u}: {curve_point2}")
# curve_points = bspline_curve(control_points, knots, degree_Bspline)
# print(f"Point on B-spline curve at u = {u}: {curve_points}")
# print('if you said no ,program will use defualt value ')
# answer = input('do you want to enter new degree of polonomial and control points? (no/yes)')

colors = ['b-','g-','c-','m-','y-','y-']
colors = ['b-','b-','b-','b-','y-','y-']

for i in range(len(set_of_control_point)):
    # Plot the B-spline curve
    knots = [j for j in range(len(set_of_control_point[i]) + degree_parameter)]
    curve_points2 = bspline_curve(set_of_control_point[i], knots, degree_parameter)
    # if i>4:
    #     plt.plot(set_of_control_point[i][:, 0], set_of_control_point[i][:, 1], 'r-', label='Control Points')  # Plot control points
    # plt.plot(set_of_control_point[i][:, 0], set_of_control_point[i][:, 1], 'ro-', label='Control Points')  # Plot control points
    # for k in range(len(set_of_control_point[i])):
    #     point = list(set_of_control_point[i][k])
    #     # print('point',point)
    #     if(i==0):
    #         plt.text(point[0],point[1],str(point),horizontalalignment='right')
    #     else: 
    #         plt.text(point[0],point[1],str(point),horizontalalignment='center')
    plt.plot(curve_points2[:, 0], curve_points2[:, 1], colors[i], label='B-spline Curve')  # Plot B-spline curve
    # plt.text(set_of_control_point[i][:, 0], set_of_control_point[i][:, 1],{'(',set_of_control_point[i][:, 0],set_of_control_point[i][:, 1],')'})
# print(f"Point on B-spline curve at u = {u}: {curve_points2}")
plt.title('B-spline Curve')
plt.xlabel('X')
plt.ylabel('Y')
plt.legend()
plt.grid(True)
plt.axis('equal')
plt.show()