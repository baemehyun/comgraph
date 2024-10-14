import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from matplotlib.patches import Ellipse
from scipy.interpolate import splprep, splev
from IPython.display import HTML
fig, ax = plt.subplots()
ax.set_xlim(0, 10)
ax.set_ylim(0, 10)

# turn off axis spines
ax.xaxis.set_visible(False)
ax.yaxis.set_visible(False)
ax.set_frame_on(False)
points = np.array([[0, 0], [1, 2], [2, 3], [3, 5], [4, 7], [5, 10], [6, 7], [8, 5], [9, 3], [10, 0], [11, -2]])
tck, u = splprep(points.T, k=3)
# print(points.T)
u_new = np.linspace(0, 1, num=1110)
x_new, y_new = splev(u_new, tck)

# # Define cloud points for B-spline interpolation
# cloud_points = np.array([[2, 6], [3, 7], [4, 7.5], [5, 7], [6, 6.5], [7, 6]])

# # Create cloud object
# cloud, = ax.plot([], [], color='white', linewidth=2, zorder=0)

# # Interpolate cloud B-spline
# tck_cloud, u_cloud = splprep(cloud_points.T, k=2)
# u_cloud_new = np.linspace(0, 1, num=1010)
# x_cloud_new, y_cloud_new = splev(u_cloud_new, tck_cloud)

morning = plt.Rectangle((0, 0), 10, 10, color='#CCFFFF', alpha=0,zorder=-1)  # Initially invisible
night = plt.Rectangle((0, 0), 10, 10, color='grey', alpha=1,zorder=-1) 
ax.add_patch(night)
ax.add_patch(morning)
# Create a car 
car_body = plt.Rectangle((-5, 1), 3, 1.5, color='blue', zorder=1)
car_window = plt.Rectangle((-3.5, 3), 1, 0.5, color='white', zorder=2)
wheel1 = plt.Circle((-5, 1), 0.35, color='black', zorder=3)
wheel2 = plt.Circle((-2, 1), 0.35, color='black', zorder=3)
#Create cloud
cloud1 = Ellipse((-3, 6), 3,1, color='white', alpha=0.7, zorder=2)
cloud2 = Ellipse((-3, 7.5), 2.3,0.8, color='white', alpha=0.7, zorder=2)
cloud3 = Ellipse((-3, 9), 3,1.2, color='white', alpha=0.8, zorder=2)
ax.add_patch(cloud1)
ax.add_patch(cloud2)
ax.add_patch(cloud3)


mountain1 = plt.Polygon(np.array([[0, 0], [1, 2.5], [2, 0]]), closed=True, edgecolor='black', facecolor='green', zorder=0)
mountain2 = plt.Polygon(np.array([[1, 0], [2.5, 3], [4, 0]]), closed=True, edgecolor='black', facecolor='green', zorder=0)
mountain3 = plt.Polygon(np.array([[3.5, 0], [4.75, 2.5], [6, 0]]), closed=True, edgecolor='black', facecolor='green', zorder=0)
mountain4 = plt.Polygon(np.array([[5, 0], [6.5, 3.5], [8, 0]]), closed=True, edgecolor='black', facecolor='green', zorder=0)
mountain5 = plt.Polygon(np.array([[7, 0], [9, 3], [11, 0]]), closed=True, edgecolor='black', facecolor='green', zorder=0)
ax.add_patch(mountain1)
ax.add_patch(mountain2)
ax.add_patch(mountain3)
ax.add_patch(mountain4)
ax.add_patch(mountain5)
#Create grass shape
grass_points = np.array([[0, 0],[0, 0.5], [0.25, 0.25], [0.5, 0.5], [0.75, 0.25], [1, 0.5], [1, 0] ])
grass = plt.Polygon(grass_points, closed=True, edgecolor= 'green', facecolor='#5EA734')
grass_center1 = np.array([0.25,0.25])
ax.add_patch(grass)
#Create shear grass shape
grass_points2 = np.array([[0, 0],[0, 0.5], [0.25, 0.25], [0.5, 0.5], [0.75, 0.25], [1, 0.5], [1, 0] ])
#shear
sh = 0.2
for i in range(len(grass_points2)):
    grass_points2[i][0] = 2+grass_points2[i][0]+(sh*grass_points2[i][1])
grass2 = plt.Polygon(grass_points2, closed=True, edgecolor= 'green', facecolor='#5EA734')
# grass2_center = np.array([2.25,0.25])
ax.add_patch(grass2)
sh = 0.4
grass_points3 = np.array([[0, 0],[0, 0.5], [0.25, 0.25], [0.5, 0.5], [0.75, 0.25], [1, 0.5], [1, 0] ])
for i in range(len(grass_points3)):
    grass_points3[i][0] = 7.5+grass_points3[i][0]+(sh*grass_points3[i][1])
grass3 = plt.Polygon(grass_points3, closed=True, edgecolor= 'green', facecolor='#5EA734')
# grass2_center = np.array([2.25,0.25])
ax.add_patch(grass3)
sh = -0.5
grass_points4 = np.array([[0, 0],[0, 0.5], [0.25, 0.25], [0.5, 0.5], [0.75, 0.25], [1, 0.5], [1, 0] ])
for i in range(len(grass_points4)):
    grass_points4[i][0] = 5+grass_points4[i][0]+(sh*grass_points4[i][1])
grass4 = plt.Polygon(grass_points4, closed=True, edgecolor= 'green', facecolor='#5EA734')
# grass2_center = np.array([2.25,0.25])
ax.add_patch(grass4)
# Create a star shape 
star_points = np.array([[0, 0.5], [0.15, 0.15], [0.5, 0.15], [0.2, -0.15], [0.3, -0.5], [0, -0.25], [-0.3, -0.5], [-0.2, -0.15], [-0.5, 0.15], [-0.15, 0.15]])
star1 = plt.Polygon(star_points, closed=True, edgecolor= 'brown', facecolor='yellow')
star2 = plt.Polygon(star_points, closed=True, edgecolor= 'brown', facecolor='yellow')
star3 = plt.Polygon(star_points, closed=True, edgecolor= 'brown', facecolor='yellow')
star4 = plt.Polygon(star_points, closed=True, edgecolor= 'brown', facecolor='yellow')
star_center1 = np.array([9, 9])
star_center2 = np.array([7, 8])
star_center3 = np.array([4, 9])
star_center4 = np.array([2, 7])

ax.add_patch(car_body)
ax.add_patch(wheel1)
ax.add_patch(wheel2)
ax.add_patch(car_window)
ax.add_patch(star1)
ax.add_patch(star2)
ax.add_patch(star3)
ax.add_patch(star4)

# Create the moon and sun
moon, = ax.plot([], [],color='yellow', marker='o',alpha=0.8, ms=40, zorder=0)
sun, = ax.plot([], [],color='orange', marker='o',alpha=0.8, ms=40, zorder=0)

# Initialize cloud
# cloud, = ax.plot([], [], color='white', linewidth=2,zorder=0)

# Initialization function: plot the background of each frame
def init():
    car_body.set_xy((-4, 1))
    wheel1.center = (-4, 1)
    wheel2.center = (-1, 1)
    car_window.set_xy((-2.5, 10))
    moon.set_data([], [])
    sun.set_data([],[])
    cloud1.center = (-3,6)
    cloud2.center = (-3,7.5)
    cloud3.center = (-3,9)
    return night,morning,car_body, wheel1, wheel2, car_window, moon, star1,star2,star3,star4,sun,cloud1, cloud2, cloud3,grass,grass2,grass3,grass4,mountain1,mountain2,mountain3,mountain4,mountain5
# Combined animation function 
def animate(i):
    if i%2200 < 1000:
        print('night')
        morning.set_alpha(0)
        night.set_alpha(1)
    elif(i%2200<1200):
        alpha_m = min(1, i%200 / 200)
        alpha_n = max(0.0,  1- i%200 / 200)
        morning.set_alpha(alpha_m)
        night.set_alpha(alpha_n)
    else:
        print('morning')
        morning.set_alpha(1)
        night.set_alpha(0)

    print(i)
    # car animation (translating)
    
    
    x_car = (i%300 / 100) * 30
    
    print(x_car,'car')
    car_body.set_xy((x_car / 4-4, 0.35))
    car_window.set_xy(((x_car / 4) + 1-4, 1.1))
    wheel1.center = (x_car / 4 + 0.5-4, 0.35)
    wheel2.center = (x_car / 4 + 2.5-4, 0.35)

    
    # moon animation (b-spline)
    if(i%2200<=1100):
        moon.set_alpha(0.8)
        sun.set_alpha(0)
        x_ball = x_new[i%1099 + 10]
        y_ball = y_new[i%1099 + 10]
        moon.set_data(x_ball, y_ball)


    # star animation (rotating)
    angle = i * np.pi / 180  # Convert frame number to angle in radians
    # star_scale = min(1.0, i / 500)  # Scale from 0 to 1 based on frame number
    if(i%2200<501):
        star_scale1 = min(1.0, i%500 / 500)  # Scale from 0 to 1 based on frame number
        
    elif(i%2200<601):
        star_scale1 = 1  
    elif(i%2200<1000):
        star_scale1 = max(0.0, 1.0 - i%400 / 400)  # Scale from 1 to 0 based on frame number  # Scale from 0 to 1 based on frame number
    else:
        star_scale1 = 0
        
    if(i%2200<201):
        star_scale2 = min(1.0, i%200 / 200)
        star_scale4 = min(1.0, i%400 / 400)
    elif(i%2200<401):
        star_scale2=1
        star_scale4 = min(1.0, i%400 / 400)
        # star_scale2 = max(0.0, 1.0 - i%200 / 200)  # Scale from 1 to 0 based on frame number  # Scale from 0 to 1 based on frame number
    elif(i%2200<600 ):
        star_scale2 = max(0.0, 1.0 - i%200 / 200)  # Scale from 1 to 0 based on frame number  # Scale from 0 to 1 based on frame number
        star_scale4 = max(0.0, 1.0 - i%200 / 200)  # Scale from 1 to 0 based on frame number  # Scale from 0 to 1 based on frame number
    else:
        star_scale2=0
        star_scale4=0
        
    if(i%2200<1000 and i%200<100):
        # star_scale1 = max(0.0, 1.0 - i%200 / 200)  # Scale from 1 to 0 based on frame number  # Scale from 0 to 1 based on frame number
        star_scale3 = min(1.0, i%100 / 100)
        # star_scale3 = max(0.0, 1.0 - i%200 / 200)  # Scale from 1 to 0 based on frame number  # Scale from 0 to 1 based on frame number
        # star_scale4 = max(0.0, 1.0 - i%200 / 200)  # Scale from 1 to 0 based on frame number  # Scale from 0 to 1 based on frame number
    elif(i%2200<1000 and i%200<200):
        star_scale3 = max(0.0, 1.0 - i%100 / 100)  # Scale from 1 to 0 based on frame number  # Scale from 0 to 1 based on frame number
    elif(i%2200>=1000):
        # star_scale1=0
        # star_scale2=0
        star_scale3=0
        star_scale4=0
        
    scaled_star_points = star_points * star_scale1
    rotated_star_points = scaled_star_points @ np.array([[np.cos(angle), -np.sin(angle)], [np.sin(angle), np.cos(angle)]])
    translated_star_points = rotated_star_points + star_center1
    star1.set_xy(translated_star_points)
    rotation_matrix = np.array([[np.cos(angle), -np.sin(angle)], [np.sin(angle), np.cos(angle)]])
    
    scaled_star_points = star_points * star_scale2
    rotation_matrix2 = np.array([ [np.sin(angle), -np.cos(angle)],[np.cos(angle), np.sin(angle)]])
    rotated_star_points = scaled_star_points @ rotation_matrix2
    translated_star_points = rotated_star_points + star_center2
    # rotated_star2 = np.dot(star_points, rotation_matrix2) + star_center2  # Rotate the star points and adjust center
    star2.set_xy(translated_star_points)
    
    angle2 = i * np.pi / 100
    scaled_star_points = star_points * star_scale3
    rotation_matrix2 = np.array([[np.cos(angle2), -np.sin(angle2)], [np.sin(angle2), np.cos(angle2)]])
    rotated_star_points = scaled_star_points @ rotation_matrix2
    # rotated_star3 = np.dot(star_points, rotation_matrix2) + star_center3  # Rotate the star points and adjust center
    translated_star_points = rotated_star_points + star_center3
    star3.set_xy(translated_star_points)
    
    scaled_star_points = star_points * star_scale4
    rotated_star_points = scaled_star_points @ np.array([[np.cos(angle), -np.sin(angle)], [np.sin(angle), np.cos(angle)]])
    translated_star_points = rotated_star_points + star_center4
    # rotated_star4 = np.dot(star_points, rotation_matrix) + star_center4  # Rotate the star points and adjust center
    star4.set_xy(translated_star_points)
    
    if(i%2200>1100):
        moon.set_alpha(0)
        sun.set_alpha(0.8)
        x_sun = x_new[i%1099 + 10]
        y_sun = y_new[i%1099 + 10]
        sun.set_data(x_sun,y_sun)
        # Cloud animation (B-spline translation)
        x_cloud = (i%1099 / 100) 
        cloud1.center = (x_cloud , 6)
        x_cloud = (i%1099 / 85) 
        cloud2.center = (x_cloud , 7.5)
        x_cloud = (i%1099 / 140) 
        cloud3.center = (x_cloud , 9)
        


    return night,morning,car_body, wheel1, wheel2, car_window, moon, star1,star2,star3,star4, sun, cloud1, cloud2, cloud3,grass,grass2,grass3,grass4,mountain1,mountain2,mountain3,mountain4,mountain5

# Create the combined animation
ani = animation.FuncAnimation(fig, animate, init_func=init, frames=2200 , interval=55, blit=True, repeat=False)

# Show the animations
plt.show()
# writervideo = animation.FFMpegWriter(fps=60) 
# ani.save('anima.mp4') 
# plt.close() 