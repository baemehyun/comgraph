import numpy as np
import matplotlib.pyplot as plt
from scipy.special import comb

def bernstein_poly(k, n, u):

    bez = comb(n, k) * ( u**k ) * ( (1 - u)**(n-k) )
    return bez

def bezier_curve(control_points, degree=3,num_points=100):

    n = len(control_points) - 1
    u = np.linspace(0, 1, num_points) #0.         0.01010101 0.02020202 0.03030303 ... 0.96969697 0.97979798 0.98989899 1. 
    # print(t)
    curve_points = np.zeros((num_points, 2)) #[[0. 0.] [0. 0.] ... [0. 0.] [0. 0.]]
    # print(curve_points)
    for k in range(0, n + 1):

        bernstein = bernstein_poly(k, n, u)
        # print('bernstein poly',bernstein)
        # print(control_points[k])
        # curve_points += np.outer(bernstein, control_points[k])
        # print(len(curve_points))
        i = k
        for j in range(0,len(bernstein)):
            curve_points[j][0] += bernstein[j]*control_points[k][0] #curve_point[x]
            curve_points[j][1] += bernstein[j]*control_points[k][1] #curve_point[y]
        # curve_points += bernstein_poly(k, n, u)*control_points[k]
    # print(curve_points)
    return curve_points

def main():
    # Accept degree of polynomial and control points
    # numsplines = int(input("Enter the number of splines : "))

    numsplines = 6
    set_of_degree = [4,3,3,2,3,4]
    set_control_points = [['-5.5 10','-2 14','1.5 5','3.5 11','5 9'] #top
                          ,['-5.5 10','2 7.5','-12 -1','-3 -6'] #left
                          ,['5 9','1 4','13 -1','4 -6'] #right
                          ,['-3 -6','0 -6.5','4 -6'] #
                          ,['4.4 5.5 ','8 10.8','11 2.5','7 0.3']
                          ,['4.2 7','8.3 12','13 7','10.3 0.5','7.5 -1.4']]

    
    for i in range(0,numsplines):
        print("spline",i+1)
        control_points = []
        # degree = int(input("Ente
        # r the degree of polynomial (number of control points - 1): "))
        # for j in range(degree + 1):
        #     x, y = map(float, input(f"Enter the coordinates of control point {j + 1} (x y): ").split())
        #     x, y = map(float, set_control_points[i][j])
        #     control_points.append([x, y])
        # Generate Bezier curve points        
        # curve_points = bezier_curve(control_points, degree)
        for j in range(set_of_degree[i] + 1):
            x, y = map(float, set_control_points[i][j].split())
            print("Enter the coordinates of control point",j+1,":",x,y)
            control_points.append([x, y])
        #finish cal controlpoint
        # Generate Bezier curve points
        curve_points = bezier_curve(control_points, set_of_degree[i])
        # print(curve_points)
        # if(i==2):
        #     print(curve_points)
        # Plot Bezier curve
        # print(control_points)
        # for k in range(len(control_points)):
        #     print('point',control_points[k])
        #     plt.text(control_points[k][0],control_points[k][1],str(control_points[k]),horizontalalignment='center')
        plt.plot(curve_points[:, 0], curve_points[:, 1], 'g-', label='Bezier Curve')
        if(i>3):
            plt.plot(curve_points[:, 0], curve_points[:, 1], 'y-', label='Bezier Curve')
        # if(i>3):
        #     plt.plot([p[0] for p in control_points], [p[1] for p in control_points], 'ro-', label='Control Points')
    plt.title('Bezier Curve')
    plt.xlabel('X')
    plt.ylabel('Y')
    plt.legend()
    plt.axis('equal')
    plt.grid(True)
    plt.show()

    

if __name__ == "__main__":
    main()
